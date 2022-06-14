package core

type Target struct {
	Id     string `json:"id"`
	Name   string `json:"name"`
	Status bool   `json:"status"`
}

var DataDir = ""
