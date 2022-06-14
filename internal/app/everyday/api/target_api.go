package api

import (
	"github.com/maldan/gam-app-everyday/internal/app/everyday/core"
	"github.com/maldan/go-cmhp/cmhp_crypto"
	"github.com/maldan/go-cmhp/cmhp_file"
)

type TargetApi struct {
}

func (r TargetApi) GetList() []core.Target {
	list, _ := cmhp_file.List(core.DataDir + "/target")
	outList := make([]core.Target, 0)
	for _, file := range list {
		var target core.Target
		cmhp_file.ReadJSON(core.DataDir+"/target/"+file.Name(), &target)
		outList = append(outList, target)
	}
	return outList
}

func (r TargetApi) PostIndex(args core.Target) {
	args.Id = cmhp_crypto.UID(10)
	cmhp_file.Write(core.DataDir+"/target/"+args.Id+".json", &args)
}
