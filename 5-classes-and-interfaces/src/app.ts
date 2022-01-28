abstract class Department {
    static fiscalYear = 2020
    // private readonly id: string;
    // private name: string;
    // private employees: string[] = [];
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string){
        // this.id = id
        // this.name = n
    }

    static createEmployee(name: string){
        return {name: name}
    }

    // describe(this: Department) {
    //     console.log(`Department (${this.id}): ${this.name}`)
    // }

    abstract describe(this: Department): void;

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

let employee = Department.createEmployee('Stef')
console.log(employee, Department.fiscalYear)

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }

    describe() {
        console.log('IT Department ID: ' + this.id)
    }
}

class AccountingDepartment extends Department {

    private lastReport: string;
    private static instance: AccountingDepartment

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(value: string) {
        if(!value){
            throw new Error('Please pass in a valid value')
        }
        this.addReport(value)
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'accounting')
        this.lastReport = reports[0]
    }

    static getInstance() {
        if(this.instance){
            return this.instance
        }
        this.instance = new AccountingDepartment('d2', [])
        return this.instance
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id)
    }

    addEmployee(name: string){
        if(name === 'Max') {
            return
        }
        this.employees.push(name)

    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }

    printReports() {
        console.log(this.reports)
    }
}

// const accounting = new AccountingDepartment('d1', [])
const accounting = AccountingDepartment.getInstance()
const it = new ITDepartment('d2', ['Max'])


accounting.addReport('hello')
accounting.mostRecentReport = 'Super Report'
accounting.printReports()

accounting.addEmployee('Max')
accounting.addEmployee('Manu')
accounting.describe()
// accounting.printEmployeeInformation()
// console.log(it)
it.describe()

