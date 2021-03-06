﻿namespace VaultexApi.Models
{
    public class EmployeeModel
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        //Employees have an organisation
        public OrganisationModel Organisation { get; set; }
    }
}
