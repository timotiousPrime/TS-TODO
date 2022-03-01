export const pageLayout = {
    template: `
    <header>
        <h1>Todo List</h1>
    </header>
    <section id="main-section">
        <section id="side-panel">
            <div id="side-panel-header">
                <h1>My Todo Lists</h1>
                <form action="" id="list-creator">
                <input type="text" id="list-creator-input" placeholder="Create a new list...">
                <button type="submit" id="list-creator-btn">Create</button>
                </form action="">
                </div>
                <div id="side-panel-lists">
                <ul id="lists"></ul>
            </div>
        </section>
    <section id="main">
    </section>
    </section>
    <footer>
    <p> Copyright &copy; 2022 TimotiousPrime</p>
  </footer>`,
}
