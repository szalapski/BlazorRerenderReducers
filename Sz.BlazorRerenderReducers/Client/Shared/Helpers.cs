using System;

namespace Sz.BlazorRerenderReducers.Client.Shared;

public static class Helpers
{
    public static T RandomOf<T>(params T[] items) => items[Random.Shared.Next(items.Length)];
}
