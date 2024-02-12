import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { ThemeSwitcher } from "./themeChanger";



export default function HomeHeader() {
    return (
        <div>
            <Navbar >
                <NavbarBrand>

                    <Avatar
                        size="lg"
                        src="/avatar.jpg"
                        isFocusable
                        alt="Chloe and Timothy Avatar."
                        isBordered
                        as={Link}
                        color="secondary"
                        href={"#"}
                    />
                </NavbarBrand>
                <NavbarContent className="flex  gap-5" justify="end">
                    <NavbarItem>
                        <Button as={Link} href="#" size="sm" color="secondary" variant="ghost">
                            Honeymoon
                        </Button>
                    </NavbarItem>
                    <NavbarItem >
                        <ThemeSwitcher />
                    </NavbarItem>
                    
                </NavbarContent>
            </Navbar>
        </div>

    );
}