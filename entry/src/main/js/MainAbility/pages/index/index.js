const allTranslations = {
    'tr': {
        // Quick Language Manager
        app_title: "Hizli Dil Yöneticisi",
        // Store Status:
        store_status: "Depo Durumu:",
        // Enter your note here...
        placeholder_note: "Notunuzu buraya girin...",
        // Save
        button_save: "Kaydet",
        // Load
        button_load: "Yükle",
        // Delete
        button_delete: "Sil",
        // Note saved successfully
        status_save_success: "Not basariyla kaydedildi",
        // Storage set failed
        status_save_fail: "Kaydetme basarisiz",
        // Note loaded successfully
        status_load_success: "Not basariyla yüklendi",
        // Failed to load note
        status_load_fail: "Not yüklenemedi",
        // Note deleted successfully
        status_delete_success: "Not basariyla silindi",
        // Failed to delete note
        status_delete_fail: "Not silinemedi",
        // No saved note found.
        status_note_empty: "Kayıtlı not bulunamadi."
    },
    'en': {
        app_title: "Quick Localization Manager",
        store_status: "Store Status:",
        placeholder_note: "Enter your note here...",
        button_save: "Save",
        button_load: "Load",
        button_delete: "Delete",
        status_save_success: "Note saved successfully",
        status_save_fail: "Storage set failed",
        status_load_success: "Note loaded successfully",
        status_load_fail: "Failed to load note",
        status_delete_success: "Note deleted successfully",
        status_delete_fail: "Failed to delete note",
        status_note_empty: "No saved note found."
    },
    'de': {
        // Quick Language Manager
        app_title: "Schneller Sprachmanager",
        // Store Status:
        store_status: "Speicherstatus:",
        // Enter your note here...
        placeholder_note: "Geben Sie Ihre Notiz hier ein...",
        // Save
        button_save: "Speichern",
        // Load
        button_load: "Laden",
        // Delete
        button_delete: "Löschen",
        // Note saved successfully
        status_save_success: "Notiz erfolgreich gespeichert",
        // Storage set failed
        status_save_fail: "Speichern fehlgeschlagen",
        // Note loaded successfully
        status_load_success: "Notiz erfolgreich geladen",
        // Failed to load note
        status_load_fail: "Laden der Notiz fehlgeschlagen",
        // Note deleted successfully
        status_delete_success: "Notiz erfolgreich gelöscht",
        // Failed to delete note
        status_delete_fail: "Löschen der Notiz fehlgeschlagen",
        // No saved note found.
        status_note_empty: "Keine gespeicherte Notiz gefunden."
    },
    'fr': {
        // Quick Localization Manager
        app_title: "Gestionnaire de Localisation Rapide",
        // Store Status:
        store_status: "État du stockage:",
        // Enter your note here...
        placeholder_note: "Entrez votre note ici...",
        // Save
        button_save: "Enregistrer",
        // Load
        button_load: "Charger",
        // Delete
        button_delete: "Supprimer",
        // Note saved successfully
        status_save_success: "Note enregistrée avec succès",
        // Storage set failed
        status_save_fail: "Échec de l'enregistrement",
        // Note loaded successfully
        status_load_success: "Note chargée avec succès",
        // Failed to load note
        status_load_fail: "Échec du chargement de la note",
        // Note deleted successfully
        status_delete_success: "Note supprimée avec succès",
        // Failed to delete note
        status_delete_fail: "Échec de la suppression de la note",
        // No saved note found.
        status_note_empty: "Aucune note enregistrée trouvée."
    },
    'es': {
        // Quick Localization Manager
        app_title: "Administrador de Localización Rápido",
        // Store Status:
        store_status: "Estado del almacenamiento:",
        // Enter your note here...
        placeholder_note: "Escribe tu nota aquí...",
        // Save
        button_save: "Guardar",
        // Load
        button_load: "Cargar",
        // Delete
        button_delete: "Eliminar",
        // Note saved successfully
        status_save_success: "Nota guardada correctamente",
        // Storage set failed
        status_save_fail: "Error al guardar la nota",
        // Note loaded successfully
        status_load_success: "Nota cargada correctamente",
        // Failed to load note
        status_load_fail: "Error al cargar la nota",
        // Note deleted successfully
        status_delete_success: "Nota eliminada correctamente",
        // Failed to delete note
        status_delete_fail: "Error al eliminar la nota",
        // No saved note found.
        status_note_empty: "No se encontró ninguna nota guardada."
    },
    'it': {
        // Quick Localization Manager
        app_title: "Gestore di Localizzazione Rapido",
        // Store Status:
        store_status: "Stato dell'archiviazione:",
        // Enter your note here...
        placeholder_note: "Inserisci la tua nota qui...",
        // Save
        button_save: "Salva",
        // Load
        button_load: "Carica",
        // Delete
        button_delete: "Elimina",
        // Note saved successfully
        status_save_success: "Nota salvata con successo",
        // Storage set failed
        status_save_fail: "Salvataggio non riuscito",
        // Note loaded successfully
        status_load_success: "Nota caricata con successo",
        // Failed to load note
        status_load_fail: "Caricamento della nota non riuscito",
        // Note deleted successfully
        status_delete_success: "Nota eliminata con successo",
        // Failed to delete note
        status_delete_fail: "Eliminazione della nota non riuscita",
        // No saved note found.
        status_note_empty: "Nessuna nota salvata trovata."
    }
};

export default {
    data: {
        // Default note content
        note: 'Hello World',
        // Status message displayed under the title
        status: '',
        // Currently selected language
        currentLang: 'en',
        // Holds the active translation labels
        labels: {}
    },

    // Called when the application starts
    onInit() {
        // Set default language to English
        this.setLanguage('en');
    },

    // Changes current language and updates all labels
    setLanguage(lang) {
        this.currentLang = lang;
        this.labels = allTranslations[lang];
        // Clear status text after language change
        this.status = '';
    },

    // Sets language to Turkish
    setLangTR() {
        this.setLanguage('tr');
    },
    // Sets language to English
    setLangEN() {
        this.setLanguage('en');
    },
    // Sets language to German
    setLangDE() {
        this.setLanguage('de');
    },
    // Sets language to French
    setLangFR() {
        this.setLanguage('fr');
    },
    // Sets language to Spanish
    setLangES() {
        this.setLanguage('es');
    },
    // Sets language to Italian
    setLangIT() {
        this.setLanguage('it');
    },

    // Updates note text when user types in the input
    handleNoteChange(e) {
        this.note = e.value;
    },

    // Simulates saving the note to storage
    putNote() {
        const that = this;
        that.status = that.labels.status_save_success;
        that.note = "Hello World";
    },

    // Simulates loading a saved note from storage
    getNote() {
        const that = this;
        if (that.note) {
            that.status = that.labels.status_load_success;
        } else {
            that.status = that.labels.status_note_empty;
        }
    },

    // Simulates deleting a note
    deleteNote() {
        const that = this;
        that.note = '';
        that.status = that.labels.status_delete_success;
    }
};