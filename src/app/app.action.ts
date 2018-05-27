import {Tutorial} from '../app/app.model';

export class AddTutorial {
    static readonly type = '[TUTORIAL] Add]';

    constructor(public payload: Tutorial) {
    }
}


export class RemoveTutorial {
    static readonly type = '[TUTORIAL Remove]';

    constructor(public payload: String) {}
}
