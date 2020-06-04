import {Injectable} from '@angular/core';
import {DataItem} from "./models/dataItem";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public leadsColumn = [
        {
            name: 'First Name',
            icon: 'user',
            sortFn: (a: DataItem, b: DataItem) => a.firstName.localeCompare(b.firstName)
        },
        {
            name: 'Last Name',
            icon: 'user',
            sortFn: (a: DataItem, b: DataItem) => a.lastName.localeCompare(b.lastName)
        },
        {
            name: 'Email ID',
            icon: 'mail'
        },
        {
            name: 'Company',
            icon: 'hdd'
        },
        {
            name: 'Website',
            icon: 'link'
        },
        {
            name: 'Location',
            icon: 'compass',
            sortFn: (a: DataItem, b: DataItem) => a.location.localeCompare(b.location)
        },
        {
            name: 'Date',
            icon: 'calendar'
        },
        {
            name: 'Tags',
            icon: 'down-circle',
            listOfFilter: [
                {text: 'Project 1', value: 'Project 1'},
                {text: 'Project 2', value: 'Project 2'},
                {text: 'Project 3', value: 'Project 3'},
                {text: 'Project 4', value: 'Project 4'},
                {text: 'Project 5', value: 'Project 5'},
                {text: 'Project 6', value: 'Project 6'}
            ],
            filterFn: (tags: string[], item: DataItem) => tags.some(tag => item.tags.indexOf(tag) !== -1),
            filterMultiple: true
        },
        {
            name: 'Phone',
            icon: 'phone'
        }
    ];

    public leads: DataItem[] = [{
        firstName: 'Vikas',
        lastName: 'Jha',
        emailId: 'vikas@alore.io',
        company: 'Plath Pte. Ltd',
        website: 'www.crm.alore.io/about-us',
        location: 'Cabo de Verde, Spain',
        date: '12/08/2017',
        tags: 'Project 1',
        phone: '91-9611180377'
    },
        {
            firstName: 'Kamlesh',
            lastName: 'Samrit',
            emailId: 'kamlesh@alore.io',
            company: 'Plath Pte. Ltd',
            website: 'www.crm.alore.io/about-us',
            location: 'Isle Canarias, Espana',
            date: '12/08/2017',
            tags: 'Project 2',
            phone: '91-9611180377'
        },
        {
            firstName: 'Sampada',
            lastName: 'Bhatnagar',
            emailId: 'sampada@alore.io',
            company: 'Plath Pte. Ltd',
            website: 'www.crm.alore.io/about-us',
            location: 'Santiago-de-Chile, Chile',
            date: '12/08/2017',
            tags: 'Project 3',
            phone: '91-9611180377'
        },
        {
            firstName: 'Deepika',
            lastName: 'Singh',
            emailId: 'deepika@alore.io',
            company: 'Plath Pte. Ltd',
            website: 'www.crm.alore.io/about-us',
            location: 'Port-Aux-Francais, Fra...',
            date: '12/08/2017',
            tags: 'Project 4',
            phone: '91-9611180377'
        },
        {
            firstName: 'Tanya',
            lastName: 'Hargava',
            emailId: 'tanya@alore.io',
            company: 'Plath Pte. Ltd',
            website: 'www.crm.alore.io/about-us',
            location: 'Los Angeles, Chile',
            date: '12/08/2017',
            tags: 'Project 5',
            phone: '91-9611180377'
        },
        {
            firstName: 'Swagata',
            lastName: 'Kumar',
            emailId: 'swagata@alore.io',
            company: 'Plath Pte. Ltd',
            website: 'www.crm.alore.io/about-us',
            location: 'Isle of Main, British Isles',
            date: '12/08/2017',
            tags: 'Project 6',
            phone: '91-9611180377'
        }
    ]
}
