using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
// ReSharper disable HeapView.BoxingAllocation

namespace API.Controllers;

public class ProductsController : BaseApiController
{
    // DI
    private readonly StoreContext _context;
    
    public ProductsController(StoreContext context)
    {
        _context = context;
    }
    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var products = await _context.Products.ToListAsync();
        
        return Ok(products);
    }
    [HttpGet("{id:int}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product is not null)
        {
            return Ok(product);
        }

        return NotFound();
    }
    
}