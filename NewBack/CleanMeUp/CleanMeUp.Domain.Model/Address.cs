﻿namespace CleanMeUp.Domain.Model
{
    public class Address : Entity
    {
        public string Street { get; set; }
        public int HouseNumber { get; set; }
        public string HouseNumberAddition { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}
