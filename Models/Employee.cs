using System;
using System.Collections.Generic;

namespace First_ASP.NET_Core_with_React.js.Models;

public partial class Employee
{
    public long IdEmployee { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string PhoneNumber { get; set; } = null!;
}
