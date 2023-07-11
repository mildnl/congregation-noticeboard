/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        meetingData: {
            date: "29. Mai",
            readingProgramm: "2 Cronika 28-29",
            president: 'Dirk Moll',
            songs: {
                initial: 54,
                middle: 56,
                end: 86
            },
            tresures: {
                talk: "Du kannst Jehova dienen – trotz einer schwierigen Kindheit",
                talkAssignee: "Daniel Heinrich",
                tresuresAssignee: "Lothar Weigmann",
                bibleReading: "Marius Schmidt"
            },
            ministry: {
                firstCall: ["Rebekka Ende / Elisabeth Woller"],
                returnVisit: ["Sandra Jäger / Natalja Fur"],
                bibleStudy: "Uwe Siefert / Cai Kewitz",
                talk: null
            },
            life: {
                parts: [
                    {
                        title: "Jehova ist der ‚Vater der Vaterlosen",
                        time: 8,
                        assignee: "Werner Kimm"
              
                    },
                    {
                        title: "Aktuelles",
                        time: 7,
                        assignee: "Mayk Jäger"
              
                    }
                ],
                congregationBibleStudy: {
                    assignee: "Mayk Jäger",
                    reader: "Rainer Blosat"
                }
            }
        }
    };
}