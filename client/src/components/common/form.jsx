import { Button } from "../ui/button";
import { Label } from "../ui/label";

function CommonForm({formControls}) {
    return (
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-3">
          {formControls.map((controlItem) => (
            <div className="grid w-full gap-1.5" key={controlItem.name}>
              <Label className="mb-1">{controlItem.label}</Label>
              {renderInputsByComponentType(controlItem)}
            </div>
          ))}
        </div>
        <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
          {buttonText || "Submit"}
        </Button>
      </form>
    );
}

export default CommonForm;