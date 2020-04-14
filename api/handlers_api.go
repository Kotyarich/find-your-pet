package api

import (
	"github.com/Kotyarich/find-your-pet/api/handlers"
	"github.com/gorilla/mux"
)

func ConfigureHandlers(r *mux.Router, hd *handlers.HandlerData) {
	// Lost
	r.HandleFunc("/losts", hd.LostHandler).Methods("GET")
	r.HandleFunc("/lost", hd.LostByIdGetHandler).Methods("GET")
	r.HandleFunc("/lost", hd.AddLostHandler).Methods("POST")

	// LostFile
	r.HandleFunc("/lost/img", hd.LostImageHandler).Methods("GET")

	// Profile
	r.HandleFunc("/profile/lost", hd.ProfileHandler).Methods("GET")
	r.HandleFunc("/lost", hd.ProfileLostOpeningHandler).Methods("PUT")
}
