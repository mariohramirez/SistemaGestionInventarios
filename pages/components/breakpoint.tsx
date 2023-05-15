import React from "react";

export function BreakPoint() {

    return <div className="border border-red-600">
        <h1 className="block sm:hidden">XS</h1>
        <h1 className="hidden sm:block md:hidden">SM</h1>
        <h1 className="hidden md:block lg:hidden">MD</h1>
        <h1 className="hidden lg:block xl:hidden">LG</h1>
        <h1 className="hidden xl:block">XL</h1>
    </div>
}