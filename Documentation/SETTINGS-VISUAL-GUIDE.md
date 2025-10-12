# ⚙️ Settings Page - Visual Guide

## 🎨 Page Layout Overview

```
┌────────────────────────────────────────────────────────────────┐
│ 📋 Header Section                                              │
│ ⚙️ System Settings                                            │
│ Configure system preferences and administrative options        │
├────────────────────────────────────────────────────────────────┤
│ ✅ Message Alert (if any)                                     │
│ ✓ Profile updated successfully!                               │
├────────────────────────────────────────────────────────────────┤
│ 📊 Statistics Cards                                           │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│ │ 📘 Total │ │ 📗 Total │ │ 📙 Total │ │ 📕 System│         │
│ │  Users   │ │ Projects │ │ Agencies │ │  Uptime  │         │
│ │   125    │ │    89    │ │    42    │ │  99.9%   │         │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
├────────────────────────────────────────────────────────────────┤
│ 🔖 Tab Navigation                                             │
│ [👤 Profile] [🔒 Security] [🔔 Notifications]                │
│ [📧 Email] [⚙️ System] [🛠️ Advanced]                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ 📝 Active Tab Content Area                                    │
│                                                                │
│ (Content changes based on selected tab)                       │
│                                                                │
│ [💾 Save Button]                                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## 🔖 Tab 1: Profile Settings

```
┌────────────────────────────────────────────────────────────────┐
│ 👤 Profile Information                                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ Full Name                        Email Address                │
│ ┌──────────────────────────┐    ┌──────────────────────────┐ │
│ │ John Doe                 │    │ john@mosje.gov.in        │ │
│ └──────────────────────────┘    └──────────────────────────┘ │
│                                                                │
│ Phone Number                     Designation                  │
│ ┌──────────────────────────┐    ┌──────────────────────────┐ │
│ │ +91-9876543210           │    │ System Administrator     │ │
│ └──────────────────────────┘    └──────────────────────────┘ │
│                                                                │
│ Organization                                                   │
│ ┌────────────────────────────────────────────────────────┐   │
│ │ Ministry of Social Justice and Empowerment             │   │
│ └────────────────────────────────────────────────────────┘   │
│                                                                │
│ ┌────────────────┐                                            │
│ │ 💾 Save Profile│                                            │
│ └────────────────┘                                            │
└────────────────────────────────────────────────────────────────┘
```

### ✅ Connected to Backend
- Updates persist to database
- Shows success message on save
- Loading spinner while saving

---

## 🔒 Tab 2: Security Settings

```
┌────────────────────────────────────────────────────────────────┐
│ 🔑 Change Password                                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ Current Password                                               │
│ ┌─────────────────────────────────────────────┐ 👁️           │
│ │ ••••••••                                     │ [Toggle]      │
│ └─────────────────────────────────────────────┘               │
│                                                                │
│ New Password                                                   │
│ ┌─────────────────────────────────────────────┐ 👁️           │
│ │ ••••••••                                     │ [Toggle]      │
│ └─────────────────────────────────────────────┘               │
│                                                                │
│ Confirm New Password                                           │
│ ┌─────────────────────────────────────────────┐ 👁️           │
│ │ ••••••••                                     │ [Toggle]      │
│ └─────────────────────────────────────────────┘               │
│                                                                │
│ ┌──────────────────────┐                                      │
│ │ 🔒 Change Password   │                                      │
│ └──────────────────────┘                                      │
├────────────────────────────────────────────────────────────────┤
│ 🛡️ Security Settings                                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ Two-Factor Authentication                        ○────○       │
│ Add an extra layer of security                   [OFF]        │
│                                                                │
│ Password Expiry (days)           Min Password Length          │
│ ┌──────────────────────────┐    ┌──────────────────────────┐ │
│ │ 90                       │    │ 8                        │ │
│ └──────────────────────────┘    └──────────────────────────┘ │
│                                                                │
│ Max Login Attempts               Lockout Duration (minutes)   │
│ ┌──────────────────────────┐    ┌──────────────────────────┐ │
│ │ 5                        │    │ 15                       │ │
│ └──────────────────────────┘    └──────────────────────────┘ │
│                                                                │
│ ☑ Require special characters in passwords                    │
│                                                                │
│ ┌───────────────────────────┐                                 │
│ │ 💾 Save Security Settings │                                 │
│ └───────────────────────────┘                                 │
└────────────────────────────────────────────────────────────────┘
```

### ✅ Password Change: Connected
### ⚠️ Security Settings: Simulated

---

## 🔔 Tab 3: Notifications

```
┌────────────────────────────────────────────────────────────────┐
│ 🔔 Notification Preferences                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ Email Notifications                              ●────○       │
│ Receive notifications via email                  [ON]         │
│                                                                │
│   ├─ Project Updates                             ●────○       │
│   │  When projects are created or updated        [ON]         │
│   │                                                            │
│   ├─ Agency Requests                             ●────○       │
│   │  New agency registration requests            [ON]         │
│   │                                                            │
│   ├─ User Registrations                          ●────○       │
│   │  New user sign-ups                           [ON]         │
│   │                                                            │
│   ├─ System Alerts                               ●────○       │
│   │  Critical system notifications               [ON]         │
│   │                                                            │
│   ├─ Weekly Reports                              ○────○       │
│   │  Weekly summary reports                      [OFF]        │
│   │                                                            │
│   └─ Monthly Reports                             ●────○       │
│      Monthly analytics reports                   [ON]         │
│                                                                │
│ ┌───────────────────────────────┐                              │
│ │ 💾 Save Notification Settings │                              │
│ └───────────────────────────────┘                              │
└────────────────────────────────────────────────────────────────┘
```

### Features
- Master toggle controls all sub-toggles
- Sub-toggles disabled when master is OFF
- Visual hierarchy with indentation
- ⚠️ Simulated (mock save)

---

## 📧 Tab 4: Email Configuration

```
┌────────────────────────────────────────────────────────────────┐
│ 📧 Email Configuration                                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ SMTP Host                        SMTP Port                    │
│ ┌──────────────────────────┐    ┌──────────────────────────┐ │
│ │ smtp.gmail.com           │    │ 587                      │ │
│ └──────────────────────────┘    └──────────────────────────┘ │
│                                                                │
│ SMTP Username                    SMTP Password                │
│ ┌──────────────────────────┐    ┌──────────────────────────┐ │
│ │                          │    │ ••••••••                 │ │
│ └──────────────────────────┘    └──────────────────────────┘ │
│                                                                │
│ From Email                       From Name                    │
│ ┌──────────────────────────┐    ┌──────────────────────────┐ │
│ │ noreply@pmajay.gov.in    │    │ PM-AJAY Portal           │ │
│ └──────────────────────────┘    └──────────────────────────┘ │
│                                                                │
│ ┌────────────────────┐  ┌──────────────────┐                 │
│ │ 💾 Save Settings   │  │ 📧 Send Test Mail│                 │
│ └────────────────────┘  └──────────────────┘                 │
└────────────────────────────────────────────────────────────────┘
```

### Features
- Complete SMTP configuration
- Password field hidden
- Test email button (future feature)
- ⚠️ Simulated (mock save)

---

## ⚙️ Tab 5: System Configuration

```
┌────────────────────────────────────────────────────────────────┐
│ ⚙️ System Configuration                                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ Maintenance Mode                                 ○────○       │
│ Disable public access for maintenance           [OFF] 🔴      │
│                                                                │
│ Allow Public Registrations                      ●────○       │
│ Enable new user sign-ups                        [ON]          │
│                                                                │
│ Require Admin Approval                          ●────○       │
│ New users need admin approval                   [ON]          │
│                                                                │
│ Session Timeout (minutes)        Max Upload Size (MB)        │
│ ┌──────────────────────────┐    ┌──────────────────────────┐ │
│ │ 30                       │    │ 10                       │ │
│ └──────────────────────────┘    └──────────────────────────┘ │
│                                                                │
│ Backup Frequency                 Log Level                    │
│ ┌──────────────────────────┐    ┌──────────────────────────┐ │
│ │ Daily            ▼       │    │ Info             ▼       │ │
│ └──────────────────────────┘    └──────────────────────────┘ │
│                                                                │
│ ┌─────────────────────────┐                                   │
│ │ 💾 Save System Settings │                                   │
│ └─────────────────────────┘                                   │
└────────────────────────────────────────────────────────────────┘
```

### Features
- Maintenance Mode toggle is RED (danger)
- Dropdown menus for predefined options
- All settings affect entire system
- ⚠️ Simulated (mock save)

---

## 🛠️ Tab 6: Advanced Options

```
┌────────────────────────────────────────────────────────────────┐
│ 🛠️ Advanced Options                                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ 🗄️ Database Information                                       │
│ ┌────────────────────────────────────────────────────────┐   │
│ │ Database Size                Last Backup                │   │
│ │ 45 MB                        Oct 13, 2025 10:30 AM      │   │
│ └────────────────────────────────────────────────────────┘   │
│                                                                │
│ ┌────────────────────────────────────────────────────────┐   │
│ │ 🔵 Backup Database                 [📥 Backup Now]     │   │
│ │ Create a backup of all system data                     │   │
│ └────────────────────────────────────────────────────────┘   │
│                                                                │
│ ┌────────────────────────────────────────────────────────┐   │
│ │ 🟢 Import Data                     [📤 Import]         │   │
│ │ Import data from backup file                           │   │
│ └────────────────────────────────────────────────────────┘   │
│                                                                │
│ ┌────────────────────────────────────────────────────────┐   │
│ │ 🟠 Clean Database                  [🔄 Clean Up]       │   │
│ │ Remove old logs and temporary files                    │   │
│ └────────────────────────────────────────────────────────┘   │
│                                                                │
│ ┌────────────────────────────────────────────────────────┐   │
│ │ 🔴 Reset System                    [🗑️ Reset]          │   │
│ │ Reset all settings to default (Dangerous!)             │   │
│ └────────────────────────────────────────────────────────┘   │
│                                                                │
│ IP Whitelist (one per line)                                   │
│ ┌────────────────────────────────────────────────────────┐   │
│ │ 192.168.1.1                                            │   │
│ │ 10.0.0.1                                               │   │
│ │ 172.16.0.1                                             │   │
│ │                                                        │   │
│ │                                                        │   │
│ └────────────────────────────────────────────────────────┘   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Features
- Color-coded action buttons
- Database stats display
- IP whitelist configuration
- ⚠️ All operations simulated (mock)

---

## 🎨 Color Coding Guide

### Statistics Cards
- 🔵 **Blue** = Users (Blue gradient)
- 🟢 **Green** = Projects (Green gradient)
- 🟣 **Purple** = Agencies (Purple gradient)
- 🟠 **Orange** = Uptime (Orange gradient)

### Tab Icons
- 👤 Profile = User icon
- 🔒 Security = Lock icon
- 🔔 Notifications = Bell icon
- 📧 Email = Mail icon
- ⚙️ System = Settings icon
- 🛠️ Advanced = Shield icon

### Action Buttons
- 🔵 **Blue** = Primary actions (Save, Backup)
- 🟢 **Green** = Positive actions (Import)
- 🟠 **Orange** = Warning actions (Cleanup)
- 🔴 **Red** = Danger actions (Reset, Maintenance)
- ⚫ **Gray** = Secondary actions

### Toggle Switches
- ⚫──○ **OFF** = Gray
- ●──○ **ON** = Blue
- ●──○ **ON (Danger)** = Red (Maintenance Mode)

### Messages
- ✅ **Green** = Success messages
- ❌ **Red** = Error messages
- ℹ️ **Blue** = Info messages
- ⚠️ **Orange** = Warning messages

---

## 📱 Mobile View

```
┌──────────────────────┐
│ ⚙️ System Settings   │
│ Configure system...  │
├──────────────────────┤
│ ✅ Success Message   │
├──────────────────────┤
│ 📘 Total Users       │
│      125             │
├──────────────────────┤
│ 📗 Total Projects    │
│       89             │
├──────────────────────┤
│ 📙 Total Agencies    │
│       42             │
├──────────────────────┤
│ 📕 System Uptime     │
│      99.9%           │
├──────────────────────┤
│ Tab Navigation       │
│ ← [Profile] [Sec] →  │
├──────────────────────┤
│                      │
│ Tab Content          │
│ (Single column)      │
│                      │
│ [Save Button]        │
│                      │
└──────────────────────┘
```

### Mobile Features
- Single column layout
- Stacked statistics cards
- Horizontal scrolling tabs
- Full-width inputs
- Touch-friendly buttons

---

## 🎭 Interactive States

### Button States

**Normal State**
```
┌────────────────┐
│ 💾 Save Profile│
└────────────────┘
```

**Hover State**
```
┌────────────────┐
│ 💾 Save Profile│  ← Darker shade
└────────────────┘
```

**Loading State**
```
┌────────────────┐
│ 🔄 Saving...   │  ← Spinner animation
└────────────────┘
```

**Disabled State**
```
┌────────────────┐
│ 💾 Save Profile│  ← Grayed out
└────────────────┘
```

### Toggle Switch Animation

**OFF to ON**
```
Step 1: ○────○  (Gray)
Step 2: ○───○   (Moving)
Step 3: ●──○    (Blue, animated)
```

**ON to OFF**
```
Step 1: ●──○    (Blue)
Step 2:  ○──○   (Moving)
Step 3: ○────○  (Gray, animated)
```

### Password Visibility Toggle

**Hidden (Default)**
```
┌─────────────────────┐ 👁️
│ ••••••••            │ [Eye Icon]
└─────────────────────┘
```

**Visible (After Click)**
```
┌─────────────────────┐ 👁️‍🗨️
│ MyP@ssw0rd          │ [Eye-Off Icon]
└─────────────────────┘
```

---

## 💬 Message System

### Success Message
```
┌────────────────────────────────────────────────────────┐
│ ✅ Profile updated successfully!                      │
└────────────────────────────────────────────────────────┘
```
- **Color**: Green background, green border
- **Duration**: Auto-dismiss after 3 seconds
- **Icon**: Check mark (✅)

### Error Message
```
┌────────────────────────────────────────────────────────┐
│ ❌ Failed to update profile. Please try again.        │
└────────────────────────────────────────────────────────┘
```
- **Color**: Red background, red border
- **Duration**: Stays until next action
- **Icon**: Alert circle (❌)

---

## 🔄 Loading Sequence

### Page Load
```
Frame 1: [Empty screen]
Frame 2: [Layout appears]
Frame 3: [Spinner centered]
         🔄 (rotating)
Frame 4: [Content loads]
Frame 5: [Statistics appear]
Frame 6: [Tabs render]
Frame 7: [Content shows]
```

### Save Action
```
Before:  [💾 Save Profile]
During:  [🔄 Saving...]     ← Button disabled, spinner
After:   [💾 Save Profile]   ← Success message appears
```

---

## 🎨 Dark Mode Comparison

### Light Mode
```
┌────────────────────────────────────────┐
│ Background: White                      │
│ Text: Dark Gray/Black                  │
│ Borders: Light Gray                    │
│ Inputs: White bg, Gray border          │
│ Cards: White with shadow               │
└────────────────────────────────────────┘
```

### Dark Mode
```
┌────────────────────────────────────────┐
│ Background: Dark Gray (#1F2937)        │
│ Text: White/Light Gray                 │
│ Borders: Medium Gray                   │
│ Inputs: Dark bg, Medium Gray border    │
│ Cards: Dark Gray with subtle shadow    │
└────────────────────────────────────────┘
```

---

## 🖱️ Click Interactions

### Tab Click
```
Before:  [Profile] [Security] [Notifications]
         ─────────  (gray underline)

After:   [Profile] [Security] [Notifications]
         ═════════  (blue underline, thicker)
```

### Toggle Click
```
Click 1: ○────○  →  ●──○   (OFF to ON)
Click 2: ●──○    →  ○────○ (ON to OFF)
```

### Dropdown Click
```
Closed:  [Daily            ▼]

Opened:  [Daily            ▲]
         ├─ Hourly
         ├─ Daily          ← Selected
         ├─ Weekly
         └─ Monthly
```

---

## 📊 Data Flow Diagram

```
User Action (Click Save)
         ↓
Component State Update
         ↓
Validation Check
    ↙         ↘
 Valid      Invalid
   ↓            ↓
API Call    Show Error
   ↓
Backend Processing
   ↓
Response Received
    ↙         ↘
Success    Error
   ↓            ↓
Update     Show Error
State      Message
   ↓
Show Success
Message
   ↓
Auto-dismiss (3s)
```

---

## 🔐 Access Control Flow

```
User Attempts to Access /settings
         ↓
Check if logged in?
    ↙         ↘
  No          Yes
   ↓           ↓
Redirect    Check Role
to Login       ↓
         Is MoSJE-Admin?
            ↙         ↘
          Yes          No
           ↓            ↓
        Allow      Redirect to
        Access     Dashboard
           ↓
    Render Settings
         Page
```

---

## 🎯 Summary Visual

```
╔═══════════════════════════════════════════════════════════╗
║                    SETTINGS PAGE                          ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  👤 Profile        → Update admin info        [✅ Real]  ║
║  🔒 Security       → Change password          [✅ Real]  ║
║  🔔 Notifications  → Email preferences        [⚠️ Mock]  ║
║  📧 Email          → SMTP configuration       [⚠️ Mock]  ║
║  ⚙️ System         → System settings          [⚠️ Mock]  ║
║  🛠️ Advanced       → Database operations      [⚠️ Mock]  ║
║                                                           ║
║  Access: MoSJE-Admin Only                                ║
║  Status: Frontend Complete, Backend Partial              ║
║  UI: Professional, Responsive, Dark Mode                 ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

---

**Document**: Visual Guide  
**Purpose**: UI/UX Reference  
**Audience**: Users & Developers  
**Status**: Complete  
**Created**: October 13, 2025
