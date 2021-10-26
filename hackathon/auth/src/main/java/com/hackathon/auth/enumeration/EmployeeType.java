package com.hackathon.auth.enumeration;

public enum EmployeeType {
    SUPPLIER("SUPPLIER"),
    MANAGER("MANAGER"),
    ERROR("Error");

    private String type;

    EmployeeType(String type) {
        this.type = type;
    }

    public static EmployeeType from(String type) {
        if (type.equalsIgnoreCase("supplier"))
            return SUPPLIER;
        else if (type.equalsIgnoreCase("manager"))
            return MANAGER;
        else
            return ERROR;
    }

    public static EmployeeType from(ApplicationRole role) {
        if (role.equals(ApplicationRole.MANAGER))
            return MANAGER;
        else if (role.equals(ApplicationRole.SUPPLIER))
            return SUPPLIER;
        else
            return ERROR;
    }

    public String getType() {
        return type;
    }
}
