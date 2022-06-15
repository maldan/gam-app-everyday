package core

type Target struct {
	Id     string `json:"id"`
	Name   string `json:"name"`
	Time   string `json:"time"`
	Status bool   `json:"status"`
}

type TargetStatus struct {
	Id     string `json:"id"`
	Status bool   `json:"status"`
}

var DataDir = ""
