package api

type MainApi struct {
}

func (r MainApi) GetIndex(args ArgsEmpty) string {
	return "Test"
}

func (r MainApi) GetTargetList(args ArgsEmpty) string {
	return "Test"
}

func (r MainApi) PostTarget(args ArgsEmpty) string {
	return "Test"
}
