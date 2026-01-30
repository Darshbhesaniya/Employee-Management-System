

const employees = [
  {
    id: 1,
    firstname: "Rahul",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      new: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Submit Daily Report",
        description: "Submit the daily work report to the manager",
        date: "2026-01-20",
        category: "Reporting",
        active: true,
        new: false,
        completed: false,
        failed: false
      },
      {
        title: "Update Client Data",
        description: "Update client information in the CRM system",
        date: "2026-01-18",
        category: "Data Entry",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Attend Team Meeting",
        description: "Attend the weekly team sync meeting",
        date: "2026-01-17",
        category: "Meeting",
        active: false,
        new: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstname: "Amit",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Fix UI Bugs",
        description: "Resolve UI alignment issues on dashboard",
        date: "2026-01-21",
        category: "Development",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review pull requests from team members",
        date: "2026-01-19",
        category: "Development",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Write Unit Tests",
        description: "Write unit tests for login module",
        date: "2026-01-16",
        category: "Testing",
        active: false,
        new: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstname: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Prepare Presentation",
        description: "Prepare slides for client presentation",
        date: "2026-01-22",
        category: "Presentation",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "Send Emails",
        description: "Send follow-up emails to clients",
        date: "2026-01-18",
        category: "Communication",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Market Research",
        description: "Research competitors and market trends",
        date: "2026-01-15",
        category: "Research",
        active: false,
        new: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstname: "Suresh",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      new: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Inventory Check",
        description: "Check and update inventory records",
        date: "2026-01-21",
        category: "Operations",
        active: true,
        new: false,
        completed: false,
        failed: false
      },
      {
        title: "Vendor Call",
        description: "Call vendor for delivery confirmation",
        date: "2026-01-19",
        category: "Communication",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "File Documents",
        description: "Organize and file office documents",
        date: "2026-01-16",
        category: "Administration",
        active: false,
        new: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstname: "Neha",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Banner",
        description: "Create marketing banner for website",
        date: "2026-01-23",
        category: "Design",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "Edit Images",
        description: "Edit product images for catalog",
        date: "2026-01-18",
        category: "Design",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Feedback Review",
        description: "Review and summarize client feedback",
        date: "2026-01-15",
        category: "Review",
        active: false,
        new: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    firstname: "admin",
    password: "123"
  }
];

// setdata in local storage
export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

// get data from localstorage
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return { employees, admin }
}