package main

import (
	"embed"

	helloworld "github.com/maldan/gam-app-everyday/internal/app/everyday"
)

//go:embed frontend/build/*
var frontFs embed.FS

func main() {
	helloworld.Start(frontFs) //
}
