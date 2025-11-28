# Quick Start Guide - Admin Panel Blazor WebAssembly

## 🚀 Get Started in 3 Minutes

### Step 1: Prerequisites Check ✓

Make sure you have:
- ✅ .NET 8.0 SDK ([Download here](https://dotnet.microsoft.com/download/dotnet/8.0))
- ✅ A code editor (Visual Studio 2022 or VS Code)
- ✅ A modern web browser

**Verify .NET installation:**
```bash
dotnet --version
# Should show: 8.0.x
```

### Step 2: Open the Project 📂

#### Option A: Visual Studio 2022
1. Double-click `AdminPanel.sln` in the `/workspace` folder
2. Wait for dependencies to restore
3. Press `F5` or click "Start"
4. Browser opens automatically ✓

#### Option B: Visual Studio Code
1. Open folder: `/workspace/AdminPanel`
2. Press `F5` to start debugging
3. Or open terminal and run: `dotnet run`
4. Open browser to displayed URL

#### Option C: Command Line
```bash
cd /workspace/AdminPanel
dotnet run
```
Then open browser to: `https://localhost:5001` or `http://localhost:5000`

### Step 3: Explore Features 🎯

#### Test API Integration
1. Click **"LIST ADMIN"** in the sidebar
2. See 10 users loaded from API
3. Observe: ID, Name, Username, Email, City

#### Test Delete Functionality
1. On the user list, click any 🗑️ (trash icon)
2. Confirmation dialog appears
3. Click **"Delete"** → User removed from list
4. Click **"Cancel"** → Dialog closes, nothing happens

#### Test JavaScript Interop
1. On the user list, click **"Test Loader (10 seconds)"**
2. Loading overlay appears with spinner
3. Wait 10 seconds (be patient!)
4. Success message appears
5. Open browser console (`F12`) to see:
   ```
   ✓ Loading completed! This message is displayed from C# after JS callback.
   ✓ The loader was visible for 10 seconds and then triggered this C# method via JSInvokable.
   ```

## 📁 Project Structure Overview

```
/workspace/
├── AdminPanel.sln              ← Open this in Visual Studio
└── AdminPanel/                 ← Main project folder
    ├── AdminPanel.csproj       ← Project file
    ├── Program.cs              ← App entry point
    ├── App.razor               ← Root component
    ├── _Imports.razor          ← Global imports
    │
    ├── Models/                 ← Data models
    │   └── User.cs
    │
    ├── Services/               ← Business logic
    │   ├── IUserService.cs
    │   ├── UserService.cs
    │   ├── IJsInteropService.cs
    │   └── JsInteropService.cs
    │
    ├── Pages/                  ← Routable pages
    │   ├── Home.razor          ← Dashboard (/)
    │   └── ListAdmin.razor     ← User list (/listadmin)
    │
    ├── Components/             ← Reusable components
    │   └── Shared/
    │       └── DeleteConfirmation.razor
    │
    ├── Layout/                 ← Layout components
    │   └── AdminLayout.razor   ← Main layout
    │
    └── wwwroot/                ← Static files
        ├── index.html          ← HTML entry point
        ├── css/                ← Stylesheets
        ├── js/                 ← JavaScript files
        ├── webfonts/           ← Font files
        └── assets/             ← Images
```

## 🎓 Features Checklist

After running the app, verify these features work:

- [ ] ✅ App loads with dashboard
- [ ] ✅ Sidebar navigation works
- [ ] ✅ Can navigate to "LIST ADMIN"
- [ ] ✅ API loads 10 users
- [ ] ✅ Delete button shows confirmation dialog
- [ ] ✅ Deleting a user removes it from list (locally)
- [ ] ✅ Cancel button closes dialog without deleting
- [ ] ✅ Loader button displays spinner for 10 seconds
- [ ] ✅ Success message appears after loader
- [ ] ✅ Console shows C# callback messages
- [ ] ✅ UI is responsive and looks good

## 💡 Tips

### Hot Reload
When using `dotnet watch run`, changes to Razor files automatically reload in the browser!

```bash
cd /workspace/AdminPanel
dotnet watch run
```

### Browser DevTools
Press `F12` to open DevTools:
- **Console**: See C# `Console.WriteLine()` output
- **Network**: Monitor API calls
- **Elements**: Inspect UI

### Troubleshooting

**Problem: "dotnet: command not found"**
- Solution: Install .NET 8.0 SDK from [dotnet.microsoft.com](https://dotnet.microsoft.com/download)

**Problem: "Port 5000 already in use"**
- Solution: Stop other applications using that port, or edit `Properties/launchSettings.json` to use different port

**Problem: Users don't load**
- Solution: Check internet connection (API is external)
- Check browser console for errors

**Problem: Styles look wrong**
- Solution: Hard refresh browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

## 📚 Next Steps

Want to learn more?

1. **Read the full README**: `/workspace/README-AdminPanel.md`
2. **Dive into technical docs**: `/workspace/TECHNICAL-DOCUMENTATION.md`
3. **Explore the code**: Start with `Pages/ListAdmin.razor`
4. **Modify and experiment**: Change colors, add fields, etc.

## 🆘 Need Help?

Common commands:

```bash
# Build the project
dotnet build

# Run the project
dotnet run

# Run with hot reload
dotnet watch run

# Clean build artifacts
dotnet clean

# Publish for production
dotnet publish -c Release

# Restore NuGet packages
dotnet restore
```

## 🎉 Success!

If you can:
- ✅ See the dashboard
- ✅ Load users from API
- ✅ Delete users with confirmation
- ✅ See the 10-second loader

**Congratulations!** You have successfully set up and run the Admin Panel Blazor WebAssembly application.

---

**Enjoy coding!** 🚀
