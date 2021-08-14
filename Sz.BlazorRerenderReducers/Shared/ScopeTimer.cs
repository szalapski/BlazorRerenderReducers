using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Sz.BlazorRerenderReducers
{
    /// <summary>
    /// A timer that starts running when created and then stops and outputs its elapsed time to the console
    /// when disposed.  Designed to be used to measure the time spent inside a Using block, or between a pair
    /// of statements (`new` and `.Dispose()`).
    /// </summary>
    /// <example>
    /// <code>
    /// using (new ScopeTimer("Loading foo into memory")}
    ///     await LoadFoo();
    /// }
    /// </code>
    /// This will output the label "LoadFoo:" and the time running LoadFoo, in milliseconds, to the console.
    /// </example>
    public class ScopeTimer : IDisposable
    {
        public Stopwatch Stopwatch1 { get; } = new Stopwatch();
        public string ScopeLabel { get; }
        public List<StackFrame> StackFrames { get; }
        public string StackNames => string.Join(" <- ", StackFrames.Select(f => f.GetMethod()?.Name ?? "Unk"));
        public int Id { get; set; }
        private static int NextId { get; set; } = 1;
        private static ConcurrentDictionary<string, int> RunCounts { get; } = new();
        private readonly bool writeStart;

        public ScopeTimer(string? scopeLabel = null, int stackLevelsToWrite = 1, bool writeStart = false)
        {
            ScopeLabel = scopeLabel ?? StackFrames?.First().GetMethod()?.Name ?? "";
            this.writeStart = writeStart;
            StackFrames = new StackTrace().GetFrames().Skip(1).Take(stackLevelsToWrite).ToList();
            Init();
        }

        public void Init()
        {
            Id = NextId++;

            if (RunCounts.ContainsKey(ScopeLabel)) ++RunCounts[ScopeLabel];
            else RunCounts[ScopeLabel] = 1;

            if (writeStart) Console.WriteLine($"Scope {Id} {ScopeLabel}: Starting {StackNames}");
            Stopwatch1.Restart();
        }

        public void Lap()
        {
            Stop();
            Init();
        }

        public void Stop()
        {
            Stopwatch1.Stop();

            // Do not comment out this line. If you want to get rid of this message, get rid of your ScopeTimer instance.
            Console.WriteLine($"{(int)Stopwatch1.ElapsedMilliseconds} ms to run scope {Id}, '{ScopeLabel}', run count {RunCounts[ScopeLabel]}");
        }

        public void Dispose() => Lap();


    }
}
