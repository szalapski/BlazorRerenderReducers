using Microsoft.AspNetCore.Components;
using System;
using System.Diagnostics;

namespace Sz.BlazorRerenderReducers.Client.ProductGridDemo;
public abstract class ProfiledRerenderComponentBase
    : ComponentBase
{
    private Stopwatch watch = new();
    private static int instanceIdSequence = 0;
    private int? instanceId = null;
    private static int? firstInstanceId = null;

    protected override void OnInitialized()
    {
        instanceId = ++instanceIdSequence;
        if (firstInstanceId == null) firstInstanceId = instanceId;
        //Initialize();
    }
    protected override void OnParametersSet()
    {
        Initialize();
    }

    private void Initialize()
    {
        Console.WriteLine($"{GetType().Name} rendering started.");
        watch.Start();
    }

    protected override void OnAfterRender(bool firstRender)
    {
        watch.Stop();
        //if (firstInstanceId == instanceId) {
        //    Console.WriteLine($"{GetType().Name} rerendered after {watch.ElapsedMilliseconds} ms");
        //    firstInstanceId = null;
        //}
        //else
        //{
            Console.WriteLine($"{GetType().Name} rendered after {watch.ElapsedMilliseconds} ms");
        //}
        watch.Reset();

    }
}
