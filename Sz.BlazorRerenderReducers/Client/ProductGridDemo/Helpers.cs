using System.Threading;

namespace Sz.BlazorRerenderReducers.Client.ProductGridDemo;

public static class Helpers
{
    // simulate an operation that takes a few ms to complete
    public static void IntensiveOperation()
    {
        Thread.Sleep(2); // milliseconds
    }
}
