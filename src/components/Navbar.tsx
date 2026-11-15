interface Navbar {
    page: "shop" | "checkout";
    setPage: (page: "shop" | "checkout") => void;
    cartItemCount: number;
}

function Navbar({ page, setPage, cartItemCount }: Navbar) {
    return (
        <nav>
            <button
                onClick={() => setPage("shop")}
                disabled={page === "shop"}
            >
                Shop
            </button>

            <button
                onClick={() => setPage("checkout")}
                disabled={page === "checkout"}
            >
                Checkout ({cartItemCount})
            </button>
        </nav>
    );
}

export default Navbar;
