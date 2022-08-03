using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sz.BlazorRerenderReducers.Client.ProductGridDemo;

public class ProfiledRerenderComponentBase : ComponentBase
{
    protected override void OnAfterRender(bool firstRender)
    {
        Console.WriteLine($"Rendered {GetType().Name}");
        base.OnAfterRender(firstRender);
    }
}
