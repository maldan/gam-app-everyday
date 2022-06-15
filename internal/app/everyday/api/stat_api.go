package api

import (
	"github.com/maldan/gam-app-everyday/internal/app/everyday/core"
	"github.com/maldan/go-cmhp/cmhp_file"
	"github.com/maldan/go-cmhp/cmhp_time"
	"time"
)

type StatApi struct {
}

func (r StatApi) GetByDate(args struct {
	Date time.Time `json:"date"`
}) []core.TargetStatus {
	stat := make([]core.TargetStatus, 0)
	cmhp_file.ReadJSON(core.DataDir+"/stat/"+cmhp_time.Format(args.Date, "YYYY-MM-DD")+".json", &stat)
	return stat
}

func (r StatApi) PostIndex(args struct {
	Date time.Time           `json:"date"`
	List []core.TargetStatus `json:"list"`
}) {
	cmhp_file.Write(core.DataDir+"/stat/"+cmhp_time.Format(args.Date, "YYYY-MM-DD")+".json", &args.List)
}
