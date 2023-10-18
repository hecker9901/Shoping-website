import queue

# Create an empty queue
todo_queue = queue.Queue()

def add_task(task):
    """Add a task to the to-do list."""
    todo_queue.put(task)
    print(f"Task '{task}' added to the to-do list.")

def complete_task():
    """Mark a task as completed and remove it from the to-do list."""
    if not todo_queue.empty():
        completed_task = todo_queue.get()
        print(f"Task '{completed_task}' marked as completed.")
    else:
        print("No tasks in the to-do list.")

def display_tasks():
    """Display the current tasks in the to-do list."""
    tasks = list(todo_queue.queue)
    if tasks:
        print("To-Do List:")
        for i, task in enumerate(tasks, 1):
            print(f"{i}. {task}")
    else:
        print("No tasks in the to-do list.")

while True:
    print("\nOptions:")
    print("1. Add Task")
    print("2. Complete Task")
    print("3. Display Tasks")
    print("4. Quit")

    choice = input("Enter your choice: ")

    if choice == "1":
        task = input("Enter the task to add: ")
        add_task(task)
    elif choice == "2":
        complete_task()
    elif choice == "3":
        display_tasks()
    elif choice == "4":
        print("Goodbye!")
        break
    else:
        print("Invalid choice. Please try again.")
