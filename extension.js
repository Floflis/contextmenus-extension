const Main = imports.ui.main;
const PopupMenu = imports.ui.popupMenu;

let systemMonitorMenuItem;

function openSystemMonitor() {
    Util.spawn(["gnome-system-monitor"]);
}

function init() {
    systemMonitorMenuItem = new PopupMenu.PopupMenuItem("System Monitor");
    systemMonitorMenuItem.connect("activate", openSystemMonitor);
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(systemMonitorMenuItem, Main.panel._rightBox.get_children().length - 1);
}

function disable() {
    Main.panel._rightBox.remove_child(systemMonitorMenuItem);
}
