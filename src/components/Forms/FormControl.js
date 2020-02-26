
// @flow

export interface FormControlComponent {
    errors: { [x: String]: String, error: String },
    reset: () => {},
    validate: () => {}
}

class FormControl {
    state: FormControlComponent
    subscriptions = new Set();

    constructor(state: FormControlComponent) {
        this.state = state;
    }

    values() {
        var x = {};
        for (const key of Object.keys(this.state)) {
            if (this.state.hasOwnProperty(key) && key !== 'errors') {
                x[key] = this.state[key];
            }
        }
        return x;
    }

    reset() {
        this.state.reset();
    }

    validate() {
        var v = this.state.validate();
        this.forceUpdate();
        return v;
    }

    setValue(field: String, value: String | Number) {
        this.state[field] = value;
        if (this.state.errors[field]) {
            this.validate();
        } else {
            this.forceUpdate();
        }
    }

    forceUpdate() {
        this.subscriptions.forEach((c: React.ReactInstance) =>
            c.forceUpdate());
    }

    subscribe(component: React.ReactInstance) {
        this.subscriptions.add(component);
        return () => this.subscriptions.delete(component);
    }
}

export default FormControl;