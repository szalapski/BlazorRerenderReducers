using BlazorState;
using MediatR;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Sz.BlazorRerenderReducers.Client.Shared
{
    public class MyMonolithicState : State<MyMonolithicState>
    {
        public string HolidayMessage { get; private set; } = "Hello world";
        public string Signature { get; private set; } = "Have a good day";
        public List<string> Items { get; } = new[] { "item1", "item2" }.ToList();
        public override void Initialize() { }

        public class ChangeMessageAction : IAction {}
        public class ChangeSignatureAction : IAction { }
        public class AddItemAction : IAction { }

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

        public class AddItemActionHandler : ActionHandler<AddItemAction>
        {
            public AddItemActionHandler(IStore aStore) : base(aStore) { }

            MyMonolithicState State => Store.GetState<MyMonolithicState>();

            public override Task<Unit> Handle(AddItemAction anAction, CancellationToken aCancellationToken)
            {
                State.Items.Add("item");
                return Unit.Task;
            }
        }
    }

}
