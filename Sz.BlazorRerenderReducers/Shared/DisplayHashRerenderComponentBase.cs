using System;
using Microsoft.AspNetCore.Components;

namespace Sz.BlazorRerenderReducers
{
    /// <summary>
    /// Components that inherit have their re-render controlled by a "display hash", or a string representation
    /// of all info that could affect their display state.  Useful for reducing the frequency of component re-renders to
    /// a minimum.
    /// </summary>
    public abstract class DisplayHashRerenderComponentBase : ComponentBase
    {
        /// <summary>
        /// Returns a string that, across successive calls, would indicate when to re-render: no change would indicate
        /// </summary>
        protected virtual string? GetDisplayHash() => null;


        /// <summary>
        /// Returns a flag to indicate whether the component should re-render based on the current and previous values
        /// returned by GetDisplayHash.
        /// </summary>
        /// <remarks>Should not need to call explicitly nor override, but you can if needed.</remarks>
        protected override bool ShouldRender()
        {
            if (!EnableRerenderReductionGlobal) return true;

            string? displayHash = GetDisplayHash();

            bool result = PreviousDisplayHash == null || PreviousDisplayHash != displayHash;
            PreviousDisplayHash = displayHash;
            return result;
        }

        /// <summary>
        /// True to enable rerender reduction globally (the default).  False to disable rerender reduction
        /// and therefore always render whenever Blazor deems possibly necessary (ordinary behavior without this library).
        /// </summary>
        public static bool EnableRerenderReductionGlobal { get; set; } = true;

        private string? PreviousDisplayHash { get; set; } = null;
        protected override void OnInitialized()
        {
            // Blazor doesn't call ShouldRender on first render, but we want it to do so, just to initialize PreviousDisplayHash.
            ShouldRender();
        }

        #region rudimentary render profiling code

        private bool _outputRenderProfiling = true;

        /// <summary>
        /// Whether to output rudimentary render profiling info to console.
        /// </summary>
        protected bool OutputRenderProfiling
        {
            get => _outputRenderProfiling;
            set
            {
                _outputRenderProfiling = value;
                if (_outputRenderProfiling) RenderTimer = new();
            }
        }

        private ScopeTimer? RenderTimer { get; set; } = null;

        protected override void OnParametersSet()
        {
            if (!OutputRenderProfiling) return;
            RenderTimer = new ScopeTimer($"Rendered {GetType().Name}");
        }

        protected override void OnAfterRender(bool firstRender)
        {
            if (!OutputRenderProfiling) return;
            if (RenderTimer == null) Console.WriteLine($"Render done but no render timer in {GetType().Name}");
            else RenderTimer?.Lap();
        }

        #endregion
    }
}
