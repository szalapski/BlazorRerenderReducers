using System;
using Microsoft.AspNetCore.Components;

namespace Sz.BlazorRerenderReducers
{
    /// <summary>
    /// Components that inherit have their re-render controlled by a "display hash", or a string representation
    /// of all info that could affect their display state.  Useful for reducing the frequency of component re-renders to
    /// a minimum.
    ///
    /// Do not inherit this on components that are already fast to rerender and thus won't benefit much.
    /// Do not inherit this on components that take only primitives as Parameters (Blazor will optimize these).
    /// Do not inherit this on components that have a very complicated display state, as it will be too hard to maintain.
    ///   (consider refactoring such components into several subcomponents)
    /// </summary>
    /// <remarks>Also includes optional render profiling code (so you can see how often a re-render happens)</remarks>
    public abstract class DisplayHashRerenderComponentBase : ComponentBase
    {
        /// <summary>
        /// Returns a string that, accross successive calls, would indicate when to re-render: no change would indicate
        /// a re-render is not needed, and a change would indicate a re-render is needed.
        /// When it returns null, then GetDisplayItems will be checked to see re-render is needed
        /// </summary>
        /// <remarks>Override this method to return a unique value for each unique display state of the component--i.e.
        /// a string that is different when any displayable state changes,
        /// and the same value when no visible change happens.
        ///
        /// Note that child components will not re-render if the current component doesn't re-render, as the current component will not
        /// set any parameters on its children unless it rerenders.</remarks>
        protected virtual string? GetDisplayHash() => null;

        /// <summary>
        /// Returns an array of strings that, accross successive calls, would indicate when to re-render: no change would indicate
        /// a re-render is not needed, and a change would indicate a re-render is needed.
        /// Only when GetDisplayHash returns null is this checked (GetDisplayHash has precedence)
        /// When it returns a null array, should also trigger a re-render regardless of whether it is a change.
        /// </summary>
        /// <remarks>Override this method to return a unique array for each unique display state of the component--i.e.
        /// a string that is different when any displayable state changes,
        /// and the same value when no visible change happens.
        ///
        /// Note that child components will not rerender if the current component doesn't re-render, as the current component will not
        /// set any parameters on its children unless it re-renders.</remarks>
        protected virtual string[]? GetDisplayItems() => null;


        /// <summary>
        /// Returns a flag to indicate whether the component should re-render based on the current and previous values
        /// returned by GetDisplayHash.
        /// </summary>
        /// <remarks>Should not need to call explicitly nor override, but you can if needed.</remarks>
        protected override bool ShouldRender()
        {
            if (!EnableRerenderReductionGlobal) return true;

            string? displayHash = GetDisplayHash();

            if (displayHash == null)
            {
                string[]? items = GetDisplayItems();
                if (items == null) return true;
                displayHash = string.Join(",", items!);
            }
            //Console.WriteLine($"{GetType()} GetDisplayHash='{displayHash ?? "null"}'"); // may want this just to look under the hood a bit

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
                //if (_outputRenderProfiling) RenderTimer = new(); // uncomment this to report time spent rendering on every render profile console line
            }
        }

        private ScopeTimer? RenderTimer { get; set; } = null;

        protected override void OnInitialized()
        {
            // Blazor doesn't call ShouldRender on first render, but we want it to do so, just to initialize PreviousDisplayHash.
            ShouldRender();
        }

        protected override void OnParametersSet()
        {
            if (!OutputRenderProfiling) return;
            // RenderTimer = new ScopeTimer($"Rendered {GetType().Name}"); // uncomment this to report time spent rendering on every render profile console line
        }

        protected override void OnAfterRender(bool firstRender)
        {
            // ensures the first render doesn't result in an immediate rerender in some cases
            if (firstRender) PreviousDisplayHash = GetDisplayHash(); 

            if (!OutputRenderProfiling) return;
            if (RenderTimer == null) Console.WriteLine($"Rendered {GetType().Name}");
            else RenderTimer?.Lap();
        }

        #endregion
    }
}
