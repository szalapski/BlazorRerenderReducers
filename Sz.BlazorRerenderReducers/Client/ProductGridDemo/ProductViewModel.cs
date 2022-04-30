
using System;
using System.Collections.Generic;
using static Sz.BlazorRerenderReducers.Client.Shared.Helpers;

namespace Sz.BlazorRerenderReducers.Client.ProductGridDemo;

public class ProductViewModel
{
    public ProductViewModel()
    {
        this.Code = Guid.NewGuid().ToString()[..6];
        this.Price = new Random().Next(100, 999) / 100m;
        OtherProperties.Add("MSRP", (this.Price * 1.2m).ToString());
        OtherProperties.Add("Color", RandomOf("Red", "Green", "Blue", "White", "Gray", "Black"));
        OtherProperties.Add("Size", RandomOf("S", "M", "L", "XL"));
        OtherProperties.Add("Release", new DateOnly(2022, RandomOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12), 1).ToString());
        OtherProperties.Add("OS Ver", RandomOf(1, 2, 3).ToString());
        OtherProperties.Add("Resolution", RandomOf("1600x1200", "1920x1080", "2560x1440"));
    }
    public string Code { get; set; }
    public decimal Price { get; set; }
    public bool IsInStock { get; set; } = true;
    public Dictionary<string, string> OtherProperties { get; } = new();
}