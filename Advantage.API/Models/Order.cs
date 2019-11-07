using System;

namespace Advantage.API.Models
{
    public class Order
    {
        public int Id { get; set; }
        public Customer Customer { get; set; }
        public decimal Total { get; set; }
        public DateTime Placed { get; set; }
        //? nullable because when someone place the order
        // this one has not a date for completed field yet.
        public DateTime? Completed { get; set;}
    }
}