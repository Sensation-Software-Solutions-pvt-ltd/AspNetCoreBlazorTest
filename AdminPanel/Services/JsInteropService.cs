using Microsoft.JSInterop;

namespace AdminPanel.Services;

public class JsInteropService : IJsInteropService
{
    private readonly IJSRuntime _jsRuntime;
    private static Action? _onLoadingCompletedCallback;

    public JsInteropService(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public async Task ShowLoaderAsync()
    {
        await _jsRuntime.InvokeVoidAsync("showLoader");
    }

    [JSInvokable("OnLoadingCompleted")]
    public static Task OnLoadingCompleted()
    {
        Console.WriteLine("✓ Loading completed! This message is displayed from C# after JS callback.");
        Console.WriteLine("✓ The loader was visible for 10 seconds and then triggered this C# method via JSInvokable.");
        _onLoadingCompletedCallback?.Invoke();
        return Task.CompletedTask;
    }

    public void SetLoadingCompletedCallback(Action callback)
    {
        _onLoadingCompletedCallback = callback;
    }
}
