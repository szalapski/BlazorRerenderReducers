using BlazorState;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Net.Http;
using System.Reflection;
using System.Threading.Tasks;
using Blazored.Modal;

namespace Sz.BlazorRerenderReducers.Client
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("#app");

            builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
            builder.Services.AddBlazorState(
                o => o.Assemblies = new Assembly[] { typeof(Program).GetTypeInfo().Assembly }
            );
            builder.Services.AddBlazoredModal();


            await builder.Build().RunAsync();
        }
    }
}
