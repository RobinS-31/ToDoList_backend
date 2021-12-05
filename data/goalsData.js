const GoalsData = {
    data: [
        {
            id: new Date().getTime(),
            title: 'Réaliser le Front-End',
            description: 'Donec molestie eros mi, sed maximus velit pretium non. Aliquam aliquet facilisis pharetra. Aliquam efficitur urna eu iaculis dignissim.',
            active: false
        },
        {
            id: (new Date().getTime() + 1),
            title: 'Réaliser le Back-End',
            description: 'Proin ac lorem id leo egestas fringilla. Donec fringilla at massa eu placerat. Praesent pulvinar blandit purus vel imperdiet.',
            active: false
        },
        {
            id: (new Date().getTime() + 2),
            title: 'Faire un repo GitHub pour le Front-end',
            description: 'Proin ac lorem id leo egestas fringilla. Donec fringilla at massa eu placerat. Praesent pulvinar blandit purus vel imperdiet.',
            active: false
        },
        {
            id: (new Date().getTime() + 3),
            title: 'Faire un repo GitHub pour le Back-end',
            description: 'Proin ac lorem id leo egestas fringilla. Donec fringilla at massa eu placerat. Praesent pulvinar blandit purus vel imperdiet.',
            active: false
        },
        {
            id: (new Date().getTime() + 4),
            title: 'Réussir le test technique',
            description: 'Quisque sed metus ultrices, ullamcorper urna et, rutrum urna. Nulla posuere urna sed orci dignissim auctor. Integer ullamcorper sapien.',
            active: true
        }
    ],
    get goalsList() {
        return this.data;
    },
    set updateGoal(goal) {
        this.data = this.data.map(goalData => {
            if (goalData.id === goal.id) {
                return { ...goalData, ...goal};
            } else {
                return goalData
            }
        });
    },
};

module.exports = GoalsData;
