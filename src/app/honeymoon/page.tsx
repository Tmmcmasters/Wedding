import HomeHeader from "../../components/homeheader";


export default function Honeymoon() {
    return (
        <>
            <header>
                <HomeHeader />
            </header>

            <main className="bg-background text-foreground px-8 py-12">
                <h1>This is going to be our honemoon page</h1>
            </main>
        </>
    );
}