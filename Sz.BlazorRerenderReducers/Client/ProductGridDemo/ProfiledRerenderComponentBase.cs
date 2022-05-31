using Microsoft.AspNetCore.Components;
using System;
using System.Diagnostics;

namespace Sz.BlazorRerenderReducers.Client.ProductGridDemo;
public abstract class ProfiledRerenderComponentBase
    : ComponentBase
{
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
