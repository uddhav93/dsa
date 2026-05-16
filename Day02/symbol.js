function sym() {
    let id = Symbol("id");
    let user = {
        name:"Uddhav",
        [id]:101
    }
    console.log(user,"id:",user[id]);
}
sym();