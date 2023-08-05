import Card from "../Card/Card";

const CardsContainer = () => {
  const users = [
    {
      id: "49d652f8-df57-431a-aac4-fa5c3a748365",
      name: "Brenda Belen",
      email: "bbelen@gmail.com",
      phone: "123456710",
      created: true,
    },
    {
      id: "66f1c80e-fa10-412b-83ac-04d15ea958e5",
      name: "Jorge Vega",
      email: "jVega@gmail.com",
      phone: "123456789",
      created: true,
    },
    {
      id: 1,
      name: "Leanne Graham",
      phone: "1-770-736-8031 x56442",
      email: "Sincere@april.biz",
      created: false,
    },
    {
      id: 2,
      name: "Ervin Howell",
      phone: "010-692-6593 x09125",
      email: "Shanna@melissa.tv",
      created: false,
    },
    {
      id: 3,
      name: "Clementine Bauch",
      phone: "1-463-123-4447",
      email: "Nathan@yesenia.net",
      created: false,
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      phone: "493-170-9623 x156",
      email: "Julianne.OConner@kory.org",
      created: false,
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      phone: "(254)954-1289",
      email: "Lucio_Hettinger@annie.ca",
      created: false,
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      phone: "1-477-935-8478 x6430",
      email: "Karley_Dach@jasper.info",
      created: false,
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      phone: "210.067.6132",
      email: "Telly.Hoeger@billy.biz",
      created: false,
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      phone: "586.493.6943 x140",
      email: "Sherwood@rosamond.me",
      created: false,
    },
    {
      id: 9,
      name: "Glenna Reichert",
      phone: "(775)976-6794 x41206",
      email: "Chaim_McDermott@dana.io",
      created: false,
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      phone: "024-648-3804",
      email: "Rey.Padberg@karina.biz",
      created: false,
    },
  ];
  return (
    <div>
      {users.map((users) => {
        return <Card 
          id={users.id}
          name={users.name}
          email={users.email}
          phone={users.phone}
        />;
      })}
    </div>
  );
};

export default CardsContainer;
