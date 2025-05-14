import { useContext } from "react";
import { ItemsContext } from "../context/ItemContextProvider";

export function useItemsContextCustomHook() {
    const context = useContext(ItemsContext)
    

    //we will make sure our custom hook should be used with in the provider component "ItemContextProvider"

    if(!context){
        throw new Error("useItemsContextCustomHook should be used with in the ItemContextProvider ");
    }

    return context;
}



{/* <App>
  <ItemContextProvider>         // ✅ Context is available
    <ComponentThatUsesHook />   // ✅ useContext gets the value
  </ItemContextProvider>
</App>

// But this is ❌ wrong:
<App>
  <ComponentThatUsesHook />     // ❌ useContext returns undefined → !context is true → error thrown
</App> */}
