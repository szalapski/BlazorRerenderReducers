# Sz.BlazorRerenderReducers

Provides classes useful for reducing the frequency of re-renders of Blazor components to a minimum.

## Usage

Suppose that you have a component that is being rerendered undesirably often.  First, you should take the ordinary steps to enable Blazor to efficiently avoid rerendering (listed below in "How to optimize..." for your reference).  But, if you are unable or unwilling to make such changes, do the following on the desired components:

1. Inherit from `DisplayHashRerenderComponentBase` on the component that you wish to reduce rerender frequency:

    ```c#
    @inherit DisplayHashRerenderComponentBase
    ```
   
   If any such component already has an override for OnAfterRender, ensure it calls the method it is overriding on the base, as one might for any overridden method:
    ```c#
    protected override void OnAfterRender(bool firstRender)
    {
        base.OnAfterRender(firstRender); 
        // ...any other calls you might have
    }
    ```

2. Override the abstract method `GetDisplayHash` to return a string that represents *all* the displayed state of the component. That is, it should return a different value when any displayable state changes, and the same value when no visible change happens.

    ```c#
    @code {
        protected override string? GetDisplayHash() => InputFoo.Bar.ToString();
    }
    ```
   
    Alternatively, override GetDisplayItems with several strings that represent, collectively, *all* the displayed state of the component.
    ```c#
    @code {
        protected override string[]? GetDisplayItems() => new [] { InputFoo.Bar, InputFoo.Qux }
    }
    ```
 
Now your component should be rerendered only when the value of GetDisplayHash changes.  To see such rerendering logged, you might choose to override AfterRender on your component. 

Note that child components will not rerender if the current component doesn't rerender, as the current component will not set any parameters on its children unless it rerenders.

## What not to do

* Do not use on components that are already fast to rerender and thus won't benefit much.
* Do not use on components that take only primitives as `[Parameter]`s (Blazor will optimize these).
* Do not use on components that have a very complicated display state, as it will be too hard to maintain. Cconsider refactoring such components into several subcomponents.

## Background

By default, Razor components inherit from the `Microsoft.AspNetCore.Components.ComponentBase` base class, which contains logic to trigger rerendering at the following times:

* After applying an updated set of parameters from a parent component.
* After applying an updated value for a cascading parameter.
* After notification of an event and invoking one of its own event handlers.
* After a call to its own `StateHasChanged` method.

Components inherited from `Microsoft.AspNetCore.Components.ComponentBase` skip rerenders due to parameter updates if either of the following are true:

* All of the parameter values are of known immutable primitive types, such as int, string, DateTime, and haven't changed since the previous set of parameters were set, or
* The component's ShouldRender method returns false.

This package provides a convenient way to avoid a complicated, onerous, or repetitive implementation of ShouldRender in the cases where rerendering needs to be optimized.

No .NET Standard, .NET Core, or .NET Framework package is provided, as it is expected that anyone working on Blazor should be on .NET 5 or later.

## Demo

See it in action at https://szalapski.github.io/BlazorRerenderReducers.

## How to optimize rerendering without using this package

* Make your parameters entirely known immutable primitive types.  If you do this, your component will automatically avoid rerendering unless the value of any parameter changes.
* Many simple components will render very fast without any need for optimization.  Measure render speed first; this information will help you avoid naively optimizing any component.
* If your component does not ever need to change after its first render, you can simply override ShouldRender to return false: `protected override bool ShouldRender() => false;`
* If your component can determine the need to rerender based on some other logic, you can simply override ShouldRender to return true or false based on such logic. 

See also:
* https://docs.microsoft.com/en-us/aspnet/core/blazor/webassembly-performance-best-practices
* https://docs.microsoft.com/en-us/aspnet/core/blazor/components/rendering
* https://github.com/dotnet/AspNetCore.Docs/blob/main/aspnetcore/blazor/components/rendering.md
