# Admin Panel - Blazor WebAssembly 8.0

A comprehensive admin panel application built with Blazor WebAssembly 8.0, featuring clean architecture, API integration, and JavaScript interop capabilities.

## 🎯 Features Implemented

### 1. **Blazor WebAssembly 8.0 Project**
- Modern single-page application using .NET 8.0
- Clean architecture with proper separation of concerns
- Organized folder structure (Models, Services, Components, Pages, Layout)

### 2. **API Integration**
- Fetches user data from JSONPlaceholder API: `https://jsonplaceholder.typicode.com/users`
- Implements `IUserService` interface for clean dependency injection
- Async/await patterns for efficient data loading
- Error handling and loading states

### 3. **Razor Page with Data Binding**
- Converted `listadmin.html` to a fully functional Razor page
- Dynamic data binding from API
- Responsive table layout with user information
- Real-time UI updates

### 4. **Shared Delete Confirmation Component**
- Reusable `DeleteConfirmation.razor` component
- Modal dialog with title, message, and action buttons
- EventCallback pattern for confirm/cancel actions
- Follows Bootstrap Material Design styling

### 5. **Local Delete Functionality**
- Delete users from the UI without API calls
- Removes entries from the list dynamically
- State management using Blazor's built-in features
- Confirmation popup before deletion

### 6. **JavaScript Interop with Loader**
- Custom loader that displays for exactly 10 seconds
- Beautiful animated spinner with overlay
- JavaScript to C# callback using `[JSInvokable]` attribute
- SweetAlert2 integration for success message
- Console logging to demonstrate C# callback execution

## 🏗️ Architecture

### Clean Architecture Principles

```
AdminPanel/
├── Models/                 # Domain models (User, Address, Company, etc.)
├── Services/              # Business logic and API services
│   ├── IUserService.cs    # User service interface
│   ├── UserService.cs     # User service implementation
│   ├── IJsInteropService.cs
│   └── JsInteropService.cs
├── Components/
│   └── Shared/           # Reusable UI components
│       └── DeleteConfirmation.razor
├── Pages/                # Blazor pages/routes
│   ├── Home.razor        # Dashboard
│   └── ListAdmin.razor   # User list page
├── Layout/               # Layout components
│   └── AdminLayout.razor # Main layout template
└── wwwroot/              # Static assets
    ├── css/              # Stylesheets
    ├── js/               # JavaScript files
    ├── webfonts/         # Font files
    └── assets/           # Images and icons
```

## 🚀 Getting Started

### Prerequisites

- .NET 8.0 SDK or later
- Visual Studio 2022 (or Visual Studio Code with C# extension)
- Modern web browser (Chrome, Firefox, Edge, etc.)

### Running the Application

#### Option 1: Using Visual Studio

1. Open `AdminPanel.sln` in Visual Studio 2022
2. Press `F5` or click the "Start" button
3. The application will open in your default browser

#### Option 2: Using Command Line

```bash
cd /workspace/AdminPanel
dotnet run
```

Then open your browser and navigate to the URL shown in the console (typically `https://localhost:5001` or `http://localhost:5000`).

#### Option 3: Using Visual Studio Code

1. Open the `/workspace/AdminPanel` folder in VS Code
2. Press `F5` to start debugging
3. Or use the terminal: `dotnet run`

### Building for Production

```bash
cd /workspace/AdminPanel
dotnet publish -c Release
```

The published files will be in `bin/Release/net8.0/publish/wwwroot/`

## 📋 Testing the Features

### 1. View User List
- Navigate to **LIST ADMIN** from the sidebar or dashboard
- Observe users loaded from the API
- The table displays: ID, Name, Username, Email, and City

### 2. Test Delete Functionality
- Click the delete (trash) icon next to any user
- A confirmation dialog appears
- Click "Delete" to remove the user from the list (local only)
- Click "Cancel" to dismiss the dialog

### 3. Test JavaScript Interop
- On the **LIST ADMIN** page, click "Test Loader (10 seconds)"
- A loading overlay with spinner appears
- Wait 10 seconds for the loader to disappear
- A success message appears via SweetAlert2
- Check the browser console for C# callback messages:
  - "✓ Loading completed! This message is displayed from C# after JS callback."
  - "✓ The loader was visible for 10 seconds and then triggered this C# method via JSInvokable."

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Material Design**: Bootstrap Material Design components
- **Dark Theme**: Professional dark theme with accent colors
- **Animated Navigation**: Collapsible sidebar with smooth transitions
- **Font Awesome Icons**: Rich iconography throughout the UI
- **Custom Fonts**: Roboto font family for better readability
- **SweetAlert2**: Beautiful alert dialogs

## 🔧 Code Quality

### Best Practices Implemented

- ✅ **Dependency Injection**: Services registered in Program.cs
- ✅ **Interface-based Design**: All services use interfaces
- ✅ **Async/Await**: Proper async patterns throughout
- ✅ **Error Handling**: Try-catch blocks with logging
- ✅ **Separation of Concerns**: Clear boundaries between layers
- ✅ **Reusable Components**: Shared components for common UI
- ✅ **Type Safety**: Strong typing with C# 12 features
- ✅ **Null Safety**: Nullable reference types enabled
- ✅ **Clean Code**: Meaningful names, proper formatting
- ✅ **Component-based**: Modular and maintainable structure

## 📦 Dependencies

All dependencies are standard .NET 8.0 Blazor WebAssembly packages:

- `Microsoft.AspNetCore.Components.WebAssembly` (8.0.x)
- `Microsoft.AspNetCore.Components.WebAssembly.DevServer` (8.0.x)
- Standard .NET 8.0 runtime libraries

### Third-party Assets (Included in wwwroot)

- Bootstrap 4.3
- Bootstrap Material Design 4.0
- Font Awesome 5.9.0
- SweetAlert2 8.13.0
- jQuery 3.4.1
- jQuery Custom Content Scroller 3.1.5

## 🎓 Key Learning Points

This project demonstrates:

1. **Blazor WebAssembly Fundamentals**: Component lifecycle, data binding, routing
2. **HTTP Client Usage**: Making API calls in Blazor
3. **JavaScript Interop**: Bidirectional communication between JS and C#
4. **Component Communication**: EventCallback and parameter passing
5. **State Management**: Managing application state in Blazor
6. **Clean Architecture**: Organizing code for maintainability
7. **Async Programming**: Proper async/await usage in web applications

## 📝 Project Structure Details

### Models
- `User.cs`: Complete user model with JSON serialization
- `Address.cs`, `Geo.cs`, `Company.cs`: Related entities

### Services
- **UserService**: Handles API calls to fetch users
- **JsInteropService**: Manages JavaScript interop with loader functionality

### Pages
- **Home.razor**: Dashboard with feature overview
- **ListAdmin.razor**: Main user list with delete functionality

### Components
- **DeleteConfirmation.razor**: Reusable confirmation dialog

### Layout
- **AdminLayout.razor**: Main application layout with sidebar navigation

## 🐛 Troubleshooting

### Issue: Application doesn't start
- Ensure .NET 8.0 SDK is installed: `dotnet --version`
- Clear bin/obj folders: `dotnet clean`
- Restore packages: `dotnet restore`

### Issue: API calls fail
- Check internet connection
- Verify the API endpoint is accessible: `https://jsonplaceholder.typicode.com/users`
- Check browser console for CORS errors

### Issue: JavaScript interop doesn't work
- Ensure all JavaScript files are loaded (check browser Network tab)
- Verify `blazor-interop.js` is included in index.html
- Check browser console for JavaScript errors

## 📄 License

This project uses the same license as the original HTML template (see HTML/LICENSE).

## 👨‍💻 Development

Built with:
- .NET 8.0 SDK
- Blazor WebAssembly
- C# 12
- HTML5, CSS3, JavaScript ES6+

---

**Note**: This is a demonstration project showcasing Blazor WebAssembly capabilities with clean architecture principles. The delete operations are local only (no backend persistence) as per the requirements.
