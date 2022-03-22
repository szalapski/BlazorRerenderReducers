
using System;

namespace Sz.BlazorRerenderReducers.Client.ProductGridDemo
{
    public class ProductViewModel
    {
        public ProductViewModel()
        {
            this.Code = Guid.NewGuid().ToString()[..6];
            this.Price = new Random().Next(100, 999) / 100m;
        }
        public string Code { get; set; }
        public decimal Price { get; set; }
        public bool IsInStock { get; set; } = true;
    }
}
