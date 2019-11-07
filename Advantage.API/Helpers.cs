using System.Collections.Generic;
using System;

namespace Advantage.API
{
    public class Helpers
    {
        private static Random _rand = new Random();
        private static string GetRandom(IList<string> items)
        {
            return items[_rand.Next(items.Count)];
        }
        internal static string MakeUniqueCustomerName(List<string> names)
        {
            var maxNames = bizPrefix.Count * bizSuffix.Count;
            
            if (names.Count >= maxNames)
            {
                throw new System.InvalidOperationException("Maximum number of uniques names exceeded");
            }

            var prefix = GetRandom(bizPrefix);
            var suffix = GetRandom(bizSuffix);
            var bizName = prefix + suffix;

            if (names.Contains(bizName))
            {
                MakeUniqueCustomerName(names);
            }
            return bizName;
        }

        internal static string MakeCustomerEmail(string customerName)
        {
            return $"contact@{customerName.ToLower()}.com";
        }
        internal static string GetRandomState()
        {
            return GetRandom(arState);
        }

        internal static decimal GetRandomOrderTotal()
        {
            return _rand.Next(100, 5000);
        }

        internal static DateTime GetRandomOrderPlaced()
        {
            var end = DateTime.Now;
            var start = end.AddDays(-90);

            TimeSpan possibleSpan = end - start;
            TimeSpan newSpan = new TimeSpan(0, _rand.Next(0,(int)possibleSpan.TotalMinutes),0);
            
            return start + newSpan;
        }

        internal static DateTime? GetRandomOrderCompleted(DateTime orderPlaced)
        {
            var now = DateTime.Now;
            var minLeadTime = TimeSpan.FromDays(7);
            var timePassed = now - orderPlaced;

            if (timePassed < minLeadTime)
            {
                return null;
            }

            return orderPlaced.AddDays(_rand.Next(7,14));
        }

        internal static readonly List<string> arState = new List<string>()
        {
            "BU", "LP", "SC", "RN", "CH", "US", "ME", "NE",
            "LR", "CA", "CO", "SL", "SF", "CR", "ER", "MI",
            "CC", "SA", "JU", "TU"
        };
        private static readonly List<string> bizPrefix = new List<string>()
        {
            "ABC",
            "XYZ",
            "MainSt",
            "Sales",
            "Enterprise",
            "Faber",
            "Quick",
            "Budget",
            "Peak",
            "Magic",
            "Family",
            "Comfort"
        };
        private static readonly List<string> bizSuffix = new List<string>()
        {
            "Co",
            "Com",
            "Transit",
            "Cars",
            "Hotels",
            "Cleaners",
            "Groomers",
            "Budget",
            "Foods",
            "Logistics",
            "Bakery",
            "Automotive"
        };
    }
}