

export class UserRegistrationForm {
    public userName: string;
    public email: string;
    public address: UserRegistrationFormAddress[] = [];
    constructor(data: any = {}) {
        this.userName = data.userName || '';
        this.email = data.email || '';
        if (data && data.address.length > 0) {
            data.address.forEach((ele: any) => {
                this.address.push(new UserRegistrationFormAddress(ele))
            });
        }
    }
}
export class UserRegistrationFormAddress {
    public city: string;
    public state: string;
    public pincode: number;
    constructor(data: any = {}) {
        this.city = data.city || '';
        this.state = data.state || '';
        this.pincode = data.pincode || '';
    }
}

export const tabMetaData = [
    {
        name: 'Registration',
        value: 1
    },
    {
        name: 'User Details',
        value: 2
    }]

