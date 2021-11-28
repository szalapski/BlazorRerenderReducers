using BlazorState;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Sz.BlazorRerenderReducers.Client.Shared
{
    public class MyMonolithicState : State<MyMonolithicState>
    {
        public string? HolidayMessage { get; private set; } = "Merry Christmas";
        public string? Signature { get; private set; } = "From Szalapski Software";

        public override void Initialize()
        {
        }

        public class ChangeMessageAction : IAction {}
        public class ChangeSignatureAction : IAction {}

        public class ChangeMessageActionHandler : ActionHandler<ChangeMessageAction>
        {
            public ChangeMessageActionHandler(IStore aStore) : base(aStore) { }

            MyMonolithicState State => Store.GetState<MyMonolithicState>();

            public override Task<Unit> Handle(ChangeMessageAction anAction, CancellationToken aCancellationToken)
            {
                State.HolidayMessage += " X";
                return Unit.Task;
            }
        }

        public class ChangeSignatureActionHandler : ActionHandler<ChangeSignatureAction>
        {
            public ChangeSignatureActionHandler(IStore aStore) : base(aStore) { }

            MyMonolithicState State => Store.GetState<MyMonolithicState>();

            public override Task<Unit> Handle(ChangeSignatureAction anAction, CancellationToken aCancellationToken)
            {
                State.Signature += " Y";
                return Unit.Task;
            }
        }
    }

}
