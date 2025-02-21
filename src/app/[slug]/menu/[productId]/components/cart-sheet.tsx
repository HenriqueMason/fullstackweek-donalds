import { useContext } from "react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { CartContext } from "../../contexts/cart";

const CartSheet = () => {
    const {isOpen, toggleCart} = useContext(CartContext);
    return (  
    <Sheet open={isOpen} onOpenChange={toggleCart}>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Are you abso</SheetTitle>
                <SheetDescription>
                    This is not
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet> );
}
 
export default CartSheet;