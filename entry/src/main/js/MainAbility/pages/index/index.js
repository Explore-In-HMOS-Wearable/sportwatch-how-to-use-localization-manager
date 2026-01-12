const allTranslations = {
    tr: {
        appTitle: 'Hizli Dil Yöneticisi',
        storeStatus: 'Depo Durumu:',
        placeholderNote: 'Notunuzu buraya girin...',
        buttonSave: 'Kaydet',
        buttonLoad: 'Yükle',
        buttonDelete: 'Sil',
        statusSaveSuccess: 'Not basariyla kaydedildi',
        statusSaveFail: 'Kaydetme basarisiz',
        statusLoadSuccess: 'Not basariyla yüklendi',
        statusLoadFail: 'Not yüklenemedi',
        statusDeleteSuccess: 'Not basariyla silindi',
        statusDeleteFail: 'Not silinemedi',
        statusNoteEmpty: 'Kayıtlı not bulunamadi.'
    },
    en: {
        appTitle: 'Quick Localization Manager',
        storeStatus: 'Store Status:',
        placeholderNote: 'Enter your note here...',
        buttonSave: 'Save',
        buttonLoad: 'Load',
        buttonDelete: 'Delete',
        statusSaveSuccess: 'Note saved successfully',
        statusSaveFail: 'Storage set failed',
        statusLoadSuccess: 'Note loaded successfully',
        statusLoadFail: 'Failed to load note',
        statusDeleteSuccess: 'Note deleted successfully',
        statusDeleteFail: 'Failed to delete note',
        statusNoteEmpty: 'No saved note found.'
    },
    de: {
        appTitle: 'Schneller Sprachmanager',
        storeStatus: 'Speicherstatus:',
        placeholderNote: 'Geben Sie Ihre Notiz hier ein...',
        buttonSave: 'Speichern',
        buttonLoad: 'Laden',
        buttonDelete: 'Löschen',
        statusSaveSuccess: 'Notiz erfolgreich gespeichert',
        statusSaveFail: 'Speichern fehlgeschlagen',
        statusLoadSuccess: 'Notiz erfolgreich geladen',
        statusLoadFail: 'Laden der Notiz fehlgeschlagen',
        statusDeleteSuccess: 'Notiz erfolgreich gelöscht',
        statusDeleteFail: 'Löschen der Notiz fehlgeschlagen',
        statusNoteEmpty: 'Keine gespeicherte Notiz gefunden.'
    },
    fr: {
        appTitle: 'Gestionnaire de Localisation Rapide',
        storeStatus: 'État du stockage:',
        placeholderNote: 'Entrez votre note ici...',
        buttonSave: 'Enregistrer',
        buttonLoad: 'Charger',
        buttonDelete: 'Supprimer',
        statusSaveSuccess: 'Note enregistrée avec succès',
        statusSaveFail: 'Échec de lenregistrement',
        statusLoadSuccess: 'Note chargée avec succès',
        statusLoadFail: 'Échec du chargement de la note',
        statusDeleteSuccess: 'Note supprimée avec succès',
        statusDeleteFail: 'Échec de la suppression de la note',
        statusNoteEmpty: 'Aucune note enregistrée trouvée.'
    },
    es: {
        appTitle: 'Administrador de Localización Rápido',
        storeStatus: 'Estado del almacenamiento:',
        placeholderNote: 'Escribe tu nota aquí...',
        buttonSave: 'Guardar',
        buttonLoad: 'Cargar',
        buttonDelete: 'Eliminar',
        statusSaveSuccess: 'Nota guardada correctamente',
        statusSaveFail: 'Error al guardar la nota',
        statusLoadSuccess: 'Nota cargada correctamente',
        statusLoadFail: 'Error al cargar la nota',
        statusDeleteSuccess: 'Nota eliminada correctamente',
        statusDeleteFail: 'Error al eliminar la nota',
        statusNoteEmpty: 'No se encontró ninguna nota guardada.'
    },
    it: {
        appTitle: 'Gestore di Localizzazione Rapido',
        storeStatus: 'Stato dellarchiviazione:',
        placeholderNote: 'Inserisci la tua nota qui...',
        buttonSave: 'Salva',
        buttonLoad: 'Carica',
        buttonDelete: 'Elimina',
        statusSaveSuccess: 'Nota salvata con successo',
        statusSaveFail: 'Salvataggio non riuscito',
        statusLoadSuccess: 'Nota caricata con successo',
        statusLoadFail: 'Caricamento della nota non riuscito',
        statusDeleteSuccess: 'Nota eliminata con successo',
        statusDeleteFail: 'Eliminazione della nota non riuscita',
        statusNoteEmpty: 'Nessuna nota salvata trovata.'
    }
};

export default {
    data: {
        note: 'Hello World',
        status: '',
        currentLang: 'en',
        labels: {}
    },

    onInit() {
        this.setLanguage('en');
    },

    setLanguage(lang) {
        this.currentLang = lang;
        this.labels = allTranslations[lang];
        this.status = '';
    },

    setLangTR() { this.setLanguage('tr'); },
    setLangEN() { this.setLanguage('en'); },
    setLangDE() { this.setLanguage('de'); },
    setLangFR() { this.setLanguage('fr'); },
    setLangES() { this.setLanguage('es'); },
    setLangIT() { this.setLanguage('it'); },

    handleNoteChange(e) {
        this.note = e.value;
    },

    putNote() {
        this.status = this.labels.statusSaveSuccess;
        this.note = 'Hello World';
    },

    getNote() {
        if (this.note) {
            this.status = this.labels.statusLoadSuccess;
        } else {
            this.status = this.labels.statusNoteEmpty;
        }
    },

    deleteNote() {
        this.note = '';
        this.status = this.labels.statusDeleteSuccess;
    }
};