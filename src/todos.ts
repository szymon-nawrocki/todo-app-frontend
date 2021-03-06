export interface TodoInterface {
    id: string,
    name: string,
    done: boolean,
    subtasks?: SubtodoInteface[]
}

export interface SubtodoInteface {
    id: string;
    name: string,
    done: boolean
}

// @TODO remove once API integration is done
export const todolist: TodoInterface[] = [
    {
        id: '1252151251512',
        name: "Buy groceries",
        done: false,
        subtasks: [
            {
                id: '1252151331512',
                name: 'buy shrimps',
                done: false
            },
            {
                id: '1252151251544',
                name: 'buy asparagus',
                done: false
            },
            {
                id: '1244151251512',
                name: 'buy white wine',
                done: false
            },
        ]
    },
    {
        id: '1252881251512',
        name: "Make laundry",
        done: false,
        subtasks: [
            {
                id: '1252151251522',
                name: 'whites',
                done: false
            },
            {
                id: '1257751251512',
                name: 'colors',
                done: false
            }
        ]
    },
    {
        id: '1252151251599',
        name: "Wash the dishes",
        done: false,
    },
    {
        id: '1271151251512',
        name: "Buy the bike parts",
        done: false,
    },
];
